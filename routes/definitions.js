/**
 * @swagger
 * definition:
 *   product_create:
 *     type: object
 *     properties:
 *        name:
 *          type: string
 *          example: 'Macbook Pro'
 *        quantity:
 *          type: number
 *          example: 10
 *   product_update:
 *     type: object
 *     properties:
 *        id:
 *          type: string
 *          example: '5f1c6311b91403286adaa783'
 *        quantity:
 *          type: number
 *          example: 5
 *   account_create:
 *     type: object
 *     properties:
 *        email:
 *          type: string
 *          example: 'example@example.com'
 *   order_create:
 *     type: object
 *     properties:
 *        order_placed_by:
 *          type: string
 *          example: '5f1c7f421225a67e798f633d'
 *        products:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              product_id:
 *                type: string
 *                example: '5f1c6311b91403286adaa783'
 *              name:
 *                type: string
 *                example: 'Macbook Pro'
 *              quantity:
 *                type: number
 *                example: 10
 */
