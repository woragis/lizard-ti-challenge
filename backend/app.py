from os import environ
from fastapi import FastAPI
from typing import List, Dict
from enum import Enum
from config.database import document_collection
from routes.route import router

app = FastAPI()

app.include_router(router)

# Database connection
# MongoDB
# client = motor.motor_asyncio.AsyncIOMotorClient(environ["MONGODB_URL"])

# db = client.get_database("college")
# student_collection = db.get_collection("students")
