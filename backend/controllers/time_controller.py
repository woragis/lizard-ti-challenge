from datetime import datetime

def get_current_time() -> str:
   return datetime.now().strftime("%H_%M_%S.%f")[:-3]