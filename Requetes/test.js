var conn = new Mongo();
var db = conn.getDB("projetBDE");

cursor = db.affairesCorruption.find({})
while ( cursor.hasNext() )
{
    printjson( cursor.next() );
}