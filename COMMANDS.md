MongoDB dbPath Path
grep -i dbPath /etc/mongod.conf

Repair db

chown -R mongodb:mongodb /data/db
rm /data/db/mongod.lock
/etc/init.d/mongodb start




