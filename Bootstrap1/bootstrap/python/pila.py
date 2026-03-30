class Pila:
    def __init__(self):
        """Inicializa una pila"""
        self.elementos = []

    def apilar(self, elemento):
        """Agrega un elemento a la pila (Push)"""
        self.elementos.append(elemento)

    def desapilar(self):
        """Elimina y devuelve el último elemento de la pila (Pop)"""
        if not self.esta_vacia():
            return self.elementos.pop()
        else:
            return "La pila está vacía"

    def cima(self):
        """Devuelve el último elemento sin eliminarlo (Peek)"""
        if not self.esta_vacia():
            return self.elementos[-1]
        else:
            return "La pila está vacía"

    def esta_vacia(self):
        """Verifica si la pila está vacía"""
        return len(self.elementos) == 0

    def tamaño(self):
        """Devuelve el número de elementos en la pila"""
        return len(self.elementos)


# Ejemplo de uso
pila = Pila()

pila.apilar(10)
pila.apilar(20)
pila.apilar(30)

print(pila.cima())          # Salida: 30
print(pila.desapilar())      # Salida: 30
print(pila.cima())           # Salida: 20
print(pila.tamaño())         # Salida: 2
print(pila.esta_vacia())     # Salida: False