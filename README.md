
# 應用程式簡介
- 使用CQRS設計模式建立電子商城網站
# 應用程式組成
- WebSite
- WebApi
  - Order
    - 使用者下單購買商品
  - Product
    - 買家處理下單商品狀態
      - 訂單成立
      - 撿貨
      - 出貨
      - 已付款
- CommandBus
  - orderProduct:'create' => 新增商品訂單，並將訂單狀態設為訂單成立
  - orderProduct:'pick' => 修改商品訂單狀態為撿貨
  - orderProduct:'ship' => 修改商品訂單狀態為出貨
  - orderProduct:'payed' => 修改商品訂單狀態為已付款
- EventBus
  - orderView:'create' => 新增訂單檢視資料
  - orderView:'update' => 修改訂單檢視資料
# 應用程式相關資料庫
- Business DB
  - Product
  - Order
- Event Store
  - OrderHistory
- Query DB
  - OrderView
# 使用工具
- NestJS
- Angular
- MongoDB
- RedisDB
- Docker
- Docker Compose
--------------------------------
