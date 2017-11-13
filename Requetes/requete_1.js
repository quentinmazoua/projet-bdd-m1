var conn = new Mongo();
var db = conn.getDB("projetBDE");

cursor = db.affairesCorruption.aggregate([{$group:{_id:"$lieu", affaires:{$sum:1}}}])
while ( cursor.hasNext() )
{
    printjson( cursor.next());
}