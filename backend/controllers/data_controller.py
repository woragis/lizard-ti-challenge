from typing import Dict

def join_dicts(dict_a: Dict, dict_b: Dict) -> Dict:
  # Junta dois dicionarios para que sejam salvos no banco de dados posteriormente
  return dict_a | dict_b