import "./todoConteiner.css"

function TodoCounter({total, completed}){
    return(
      <h2 className="Todo-Counter">
        Haz completado <span>{completed}</span> de <span>{total}</span> tareas 
      </h2>
    )
  }

  export { TodoCounter };