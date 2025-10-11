import pymysql
from pymongo import MongoClient

# 1️⃣ Connect to local MySQL
mysql_conn = pymysql.connect(
    host="localhost",
    user="root",          # your MySQL username
    password="123cs0204", # replace with your local MySQL password
    db="tours_travel_system"
)
cursor = mysql_conn.cursor(pymysql.cursors.DictCursor)

# 2️⃣ Connect to MongoDB Atlas
mongo_client = MongoClient("mongodb+srv://123cs0204:03082004ts@cluster0.eore8d9.mongodb.net/tours_travel_system")
mongodb = mongo_client["tours_travel_system"]

# 3️⃣ List of tables to migrate
tables = [
    "activity",
    "address",
    "booking",
    "location",
    "lodging",
    "meal",
    "payment",
    "tour",
    "transport",
    "user"
]

# 4️⃣ Migrate each table
for table in tables:
    print(f"➡ Migrating table: {table}")
    cursor.execute(f"SELECT * FROM `{table}`")
    rows = cursor.fetchall()
    if rows:
        mongodb[table].insert_many(rows)
    print(f"✅ Table {table} migrated, {len(rows)} rows")

print("🎉 All tables migrated successfully!")
