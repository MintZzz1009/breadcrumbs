# breadcrumbs

POST /grandparents  
 => name, content
GET /grandparents/:gpId
=> id, name, content

POST /grandparents/:gpId/parents
=> name, content, p_of_parent(req.params) + < gp_name >
GET /grandparents/:gpId/parents/:pId
=> id, name, content, p_of_parent(req.params) + < gp_name >

POST /grandparents/:gpId/parents/:pId/childs
GET /grandparents/:gpId/parents/:pId/childs/:cId

POST /grandparents/:gpId/parents/:pId/childs/:cId/grandchilds
GET /grandparents/:gpId/parents/:pId/childs/:cId/grandchilds/:gcId

[DB](https://drawsql.app/teams/haksoo-jis-team/diagrams/breadcrumbs)
