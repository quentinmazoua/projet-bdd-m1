var conn = new Mongo();
var db = conn.getDB("affairesCorruption");

cursor = db.test.find()
while ( cursor.hasNext() )
{
    printjson( cursor.next() );
}