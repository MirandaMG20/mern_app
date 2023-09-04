import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

// The GoalItem component receives a goal prop, which represents the individual goal to be displayed and deleted.
function GoalItem({ goal }) {
    const dispatch = useDispatch()

    return (
        <div className='goal'>
            
            {/* The creation date of the goal is displayed */}
            <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
            <h2>{goal.text}</h2>
            <button
                onClick={() => dispatch(deleteGoal(goal._id))}
                className='close'>
                X
            </button>
        </div>
    )
}

export default GoalItem