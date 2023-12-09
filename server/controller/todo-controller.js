import todo from "../model/Todo.js";

export const addTodo=async (req,res)=>{
    try {
        const newTodo=await todo.create({
            data:req.body.data,
            createdAt:Date.now()
        })
    
        await newTodo.save();
    
        return res.status(200).json(newTodo);
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getAllTodos=async(req,res)=>{
    try {
        const todos=await todo.find({}).sort({'createdAt':-1})
    
        return res.status(200).json(todos);
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const toggleTodoDone=async(req,res)=>{
    try {
        const todoId = req.params.id;
    
        // Check if the todo with the given ID exists
        const existingTodo = await todo.findById(todoId);
        if (!existingTodo) {
          return res.status(404).json({ error: 'Todo not found' });
        }
    
        // Toggle the done status
        existingTodo.done = !existingTodo.done;
    
        // Save the changes
        const updatedTodo = await existingTodo.save();
    
        return res.status(200).json(updatedTodo);
      } catch (error) {
        console.error('Error toggling todo done status:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const updateTodo = async (request, response) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const Todo = await todo.findById(request.params.id);

        return response.status(200).json(Todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const deleteTodo = async (request, response) => {
    try {
        const Todo = await todo.findByIdAndDelete(request.params.id)

        return response.status(200).json(Todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}


