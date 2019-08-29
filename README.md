
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
- EventBus
# 應用程式相關資料庫
- Business DB
- Event Store
- Query DB
# 使用工具
- NestJS
- Angular
- MongoDB
- RedisDB
- Docker
- Docker Compose
--------------------------------
