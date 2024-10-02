from datetime import datetime

def get_current_time() -> str:
   # Funcao que cria uma string de tempo para que seja usada no nome do arquivo temporario
   return datetime.now().strftime("%H_%M_%S.%f")[:-3]