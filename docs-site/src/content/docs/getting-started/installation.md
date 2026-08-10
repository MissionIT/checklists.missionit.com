---
title: Installation
description: Install the Claroty CTD MCP Server using uv or pip.
---

## Prerequisites

- Python 3.11 or higher
- [`uv`](https://docs.astral.sh/uv/) or pip
- Claroty CTD credentials

## Install using uv

```bash
uv tool install claroty-ctd-mcp
```

## Install using pip

```bash
pip install claroty-ctd-mcp
```

:::tip
If `claroty-ctd-mcp` isn't found after installation, update your shell `PATH`.
:::

## Run without installing

You can run the server directly without a permanent install using `uvx`:

```bash
uvx claroty-ctd-mcp
```

This is the recommended approach for editor integrations.

:::note
If you just want to interact with claroty-ctd-mcp via an agent chat interface rather than running the server yourself, see the [Deployment](/claroty-ctd-mcp/deployment/docker/) options.
:::
