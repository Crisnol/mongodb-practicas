use("Peliculas");

db["4 fantasticos"].update (
    {_id:ObjectId("691e10bbf8c30e4d187d2356")},
    {$set:{año:"1990"}}
)

db["4 fantasticos"].update(
    {_id:ObjectId("691e10bbf8c30e4d187d2355")},
    {$set:{genero:"fantasia"}}
)


db.Avengers.update (
    {_id: ObjectId("691e10bbf8c30e4d187d235f")},
    {$set:{nombre:"Avengers EL original"}}
)

db.Avengers.update (
    {_id: ObjectId("691e10bbf8c30e4d187d235d")},
    {$set:{año:"2022"}}
)


db.Intellestelar.update (
    {_id: ObjectId("691e10bcf8c30e4d187d2364")},
    {$set:{nombre:"Inception 2"}}
)

db.Intellestelar.update (
    {_id: ObjectId("691e10bcf8c30e4d187d2363")},
    {$set:{director:"richard feyman"}}
)


db["Iron-Man"].update (
    {_id: ObjectId("691e10bcf8c30e4d187d236e")},
    {$set:{director:"william shatner"}}
)

db["Iron-Man"].update (
    {_id: ObjectId("691e10bcf8c30e4d187d2376")},
    {$set:{nombre:"Iron Man 3"}}
)


db.MIB.update (
    {_id: ObjectId("691e10bcf8c30e4d187d237c")},
    {$set:{nombre:"Vol 1 MIB "}}
)

db.MIB.update (
    {_id: ObjectId("691e10bcf8c30e4d187d237b")},
    {$set:{nombre:"Vol 4 MIB versión 2"}}
)