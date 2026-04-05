# CCHNNL

Website for [pearlhelix.info](https://pearlhelix.info), hosted via GitHub Pages.

## Gandi DNS Configuration

To point `pearlhelix.info` at GitHub Pages, add the following records in your [Gandi LiveDNS](https://admin.gandi.net) zone:

### Apex domain (`pearlhelix.info`) — A records

| Type | Name | Value              | TTL  |
|------|------|--------------------|------|
| A    | @    | 185.199.108.153    | 3600 |
| A    | @    | 185.199.109.153    | 3600 |
| A    | @    | 185.199.110.153    | 3600 |
| A    | @    | 185.199.111.153    | 3600 |

### `www` subdomain — CNAME record

| Type  | Name | Value                   | TTL  |
|-------|------|-------------------------|------|
| CNAME | www  | pearl-helix.github.io.  | 3600 |

> After updating DNS, GitHub will automatically provision a TLS certificate for the domain (may take up to 24 hours for full propagation).

## GitHub Pages Setup

1. Go to **Settings → Pages** in this repository.
2. Under **Source**, select **GitHub Actions**.
3. The `CNAME` file in the root of this repo (`pearlhelix.info`) tells GitHub Pages to serve the site at that domain.
4. Push to `main` — the [deploy workflow](.github/workflows/deploy-pages.yml) will publish the site automatically.
