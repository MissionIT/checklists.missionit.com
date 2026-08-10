---
title: Configuration
description: Configure environment variables and settings for the Claroty CTD MCP Server.
---

## Environment Variables

Configure your Claroty CTD credentials and server settings using environment variables.

### Required

| Variable | Description |
|----------|-------------|
| `CTD_USERNAME` | Claroty CTD username |
| `CTD_PASSWORD` | Claroty CTD password |


### Optional

| Variable | Default | Description |
|----------|---------|-------------|
| `CTD_ENABLED_MODULES` | all | Defines which tools the server exposes.<br/><br/>Accepts a Comma-separated list of supported modules:<br/><br/><ul><li>``inventory``</li><br/><li>``detections``</li><br/><li>``vulnerabilities``</li><br/><li>``insights``</li><br/><li>``active_detection``</li><br/><li>``administration``</li><br/><li>``threat_content``</li><br/><li>``appliance_updates``</li><br/></ul> |
| `CTD_AUDIT_TO_STDERR` | false | Writes sanitized audit records to stderr. Possible values are:<br/><br/>``true``, which enables, or<br/><br/>``false``, which disables| 


## Using a .env File

The recommended approach for development is a `.env` file.

### Option 1: Copy from the repository

```bash
cp .env.example .env
```

### Option 2: Download from GitHub

```bash
curl -o .env https://raw.githubusercontent.com/CrowdStrike/falcon-mcp/main/.env.example
```

### Option 3: Create manually

```bash frame="code"
# Required Configuration
FALCON_CLIENT_ID=your-client-id
FALCON_CLIENT_SECRET=your-client-secret
FALCON_BASE_URL=https://api.crowdstrike.com

# Optional Configuration
#FALCON_MEMBER_CID=your-child-cid
#FALCON_MCP_MODULES=detections,hosts,intel
#FALCON_MCP_TRANSPORT=stdio
#FALCON_MCP_DEBUG=false
#FALCON_MCP_HOST=127.0.0.1
#FALCON_MCP_PORT=8000
#FALCON_MCP_STATELESS_HTTP=false
#FALCON_MCP_API_KEY=your-api-key
#FALCON_PROXY_URL=http://proxy.corp.example.com:8080
```

## Module Selection

By default, all available modules are enabled. To restrict which modules load:

```bash
# Command line (highest priority)
falcon-mcp --modules detections,hosts,intel
```

```bash
# Environment variable (fallback)
export FALCON_MCP_MODULES=detections,hosts,intel
falcon-mcp
```

**Priority order:** CLI flag > `FALCON_MCP_MODULES` env var > all modules (default)

## HTTP Transport Security

When running HTTP transports (`sse` or `streamable-http`), protect the endpoint with an API key:

```bash
falcon-mcp --transport streamable-http --api-key your-secret-key
```

This is a self-generated key (any secure string you create) that ensures only authorized clients with the matching key can access the MCP server. It is separate from your CrowdStrike API credentials.
