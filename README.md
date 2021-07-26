# Pai para filho

````tsx
<Pai>
  <Filho />
</Pai>
````

# Propriedade

````tsx
<Pai>
  <Filho title="" />
</Pai>
````

# Hooks (useState, useContext, useReducer)

````tsx
function Component() {
  const [estado, setEstado] = useState()
}
````

# Fluxo de renderização

1. Gerar uma nova versão do componente que precisa ser renderizado;
2. Comparar essa nova versão com a versão anterior já salva na página;
3. Se houverem alterações, o React "renderiza" essa nova versão em tela;

# Reconciliação

1. Criar uma nova versão do componente
2. Comparar com a versão anterior
3. Se houverem alterações, vai atualizar o que alterou

# Memo

1. Pure Functional Components
2. Renders too often
3. Re-renders with same props
4. Medium to big size

# useMemo

1. Calculos pesados.
2. Igualdade referencial (quando a gente repassa aquela informação a um componente filho)

# useCallback

