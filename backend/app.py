from fastapi import FastAPI
from backend.routes.document_routes import router

app = FastAPI()

app.include_router(router)

# Database connection
# MongoDB
# client = motor.motor_asyncio.AsyncIOMotorClient(environ["MONGODB_URL"])

# db = client.get_database("college")
# student_collection = db.get_collection("students")
