import json

from odoo import http
from odoo.http import request


class SalesApiController(http.Controller):

    @http.route(
        "/api/ext/products",
        type="http",
        auth="public",
        methods=["GET"],
        csrf=False,
    )
    def get_products(self, **kwargs):
        products = request.env["product.product"].sudo().search([], limit=20)

        data = []
        for p in products:
            data.append({
                "id": p.id,
                "name": p.name,
                "price": p.list_price,
                "default_code": p.default_code,
            })

        return request.make_json_response(data)