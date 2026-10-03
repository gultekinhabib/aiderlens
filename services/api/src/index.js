const json = (data, init = {}) =>
  new Response(JSON.stringify(data, null, 2), {
    ...init,
    headers: { "content-type": "application/json; charset=utf-8", ...(init.headers || {}) }
  });

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return json({ ok: true, service: "aiderlens-api" });
    }

    if (request.method === "POST" && url.pathname === "/v1/scans/classify") {
      return json({
        error: "not_implemented",
        message: "Scan classification will be implemented in the next milestone."
      }, { status: 501 });
    }

    return json({ error: "not_found" }, { status: 404 });
  }
};
