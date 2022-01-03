/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Log in user and return JWT
 *     tags:
 *      - User
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *       schema:
 *          $ref: "#/definitions/productAddRemove"
 *     responses:
 *       200:
 *         description: Returns the cart of a user
 *
 * /api/user/signup:
 *   post:
 *    summary: Sign up user
 *    tags:
 *      - User
 *    responses:
 *      201:
 *       description: Returns the updated cart
 *    parameters:
 *     - name: product
 *       in: body
 *       description: Object with id of the product ID and quantity to add
 *       required: true
 *       schema:
 *          $ref: "#/definitions/productAddRemove"
 *
 * definitions:
 *  productAddRemove:
 *   type: "object"
 *   properties:
 *     product:
 *       type: "string"
 *     quantity:
 *      type: "number"
 *   required: ["product", "quantity"]
 *
 */
