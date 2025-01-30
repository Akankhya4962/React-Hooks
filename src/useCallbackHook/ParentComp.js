import React, {useState, useCallback} from 'react'
import Count from './Count'
import Title from './Title'
import Button from './Button'

const ParentComp = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    
    console.log('hello', age, salary);
    
  return (
    <div>
      <Title/>
      <Count text='Age' Value={age}/>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text='Salary' Value={salary}/>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComp
