---
title: CLI Commands
description: Command-line options for running the Claroty CTD MCP Server.
---

## Basic Usage

Run the server with default settings (stdio transport):

```bash
claroty-ctd-mcp
```

Run with SSE transport:

```bash
claroty-ctd-mcp --transport sse
```

Run with streamable-http transport:

```bash
claroty-ctd-mcp --transport streamable-http
```

Run with streamable-http on a custom port:

```bash
claroty-ctd-mcp --transport streamable-http --host 0.0.0.0 --port 8080
```

Run with stateless HTTP mode (for scalable deployments like AWS AgentCore):

```bash
claroty-ctd-mcp --transport streamable-http --stateless-http
```

Run with API key authentication:

```bash
claroty-ctd-mcp --transport streamable-http --api-key your-secret-key
```

## Module Selection

Enable specific modules by name (comma-separated):

```bash
claroty-ctd-mcp --modules inventory,detections,vulnerabilities
```

Enable only one module:

```bash
claroty-ctd-mcp --modules detections
```

If no `--modules` flag is provided, all available modules are enabled.

## All Options

```text
claroty-ctd-mcp --help
```

| Flag | Env Variable | Default | Description |
|------|-------------|---------|-------------|
| `--transport` | `CLAROTY_CTD_MCP_TRANSPORT` | `stdio` | Transport methods:<br/><br/><ul><li>`stdio`</li><br/><li>`sse`</li><br/><li>`streamable-http`</li></ul> |
| `--host` | `CLAROTY_CTD_MCP_HOST` | `127.0.0.1` | Host for HTTP transports. Accepts IPv4 and IPv6 addresses. |
| `--port` | `CLAROTY_CTD_MCP_PORT` | `8000` | Port for HTTP transports |
| `--modules` | `CLAROTY_CTD_MCP_MODULES` | all | Comma-separated list of modules to enable:<br/><br/><ul><li>``inventory``</li><br/><li>``detections``</li><br/><li>``vulnerabilities``</li><br/><li>``insights``</li><br/><li>``active_detection``</li><br/><li>``administration``</li><br/><li>``threat_content``</li><br/><li>``appliance_updates``</li></ul>|
| `--debug` | `CLAROTY_CTD_MCP_DEBUG` | `false` | Enable debug logging. Debug diagnostics go to stderr; sensitive HTTP-library debug logging remains suppressed. |
| `--stateless-http` | `CLAROTY_CTD_MCP_STATELESS_HTTP` | `false` | Stateless mode for scalable deployments |

## Using as a Library

Python embedding is now supported through ``ClarotyCTDMCPServer``.

Pass CTD credentials using the username and password constructor arguments:

```python
from claroty_ctd_mcp.server import ClarotyCTDMCPServer

server = ClarotyCTDMCPServer(
    base_url="https://your-ctd-URL.com",
    username=os.environ["CTD_USERNAME"],
    password=os.environ["CTD_PASSWORD"],
    debug=True,
    enabled_modules=["detections", "insights"]
)

# Run with stdio transport (default)
server.run()

# Or with a specific transport
# server.run("streamable-http")
```

For enterprise deployments using secret management systems (HashiCorp Vault, AWS Secrets Manager, etc.), you can pass credentials directly:

```python
server = FalconMCPServer(
    client_id="your-client-id",
    client_secret="your-client-secret",
    base_url="https://your-ctd-URL.com",
    enabled_modules=["detections", "hosts"]
)
server.run()
```

CLI arguments take precedence over environment variables. Invalid transports, IP addresses, ports, module names, and boolean values stop startup with a clear error.