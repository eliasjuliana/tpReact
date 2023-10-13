import EmployeeCard from "../Components/Ejercicio7/EmployeeCard";


// lista de empleados

let employees = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://api.dicebear.com/7.x/miniavs/svg?seed=Cali" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://api.dicebear.com/7.x/miniavs/svg?seed=Baby" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://api.dicebear.com/7.x/miniavs/svg?seed=Charlie" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://api.dicebear.com/7.x/miniavs/svg?seed=Cookie" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://api.dicebear.com/7.x/miniavs/svg?seed=Leo" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://api.dicebear.com/7.x/miniavs/svg?seed=Tigger" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://api.dicebear.com/7.x/miniavs/svg?seed=Peanut" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://api.dicebear.com/7.x/miniavs/svg?seed=Lily" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://api.dicebear.com/7.x/miniavs/svg?seed=Pepper" },
  ]
  

const Ejercicio7 = () => {
  return (
    <section className="container-fluid p-3 exercise-container">
    {
        employees.map((item)=>{
            return <EmployeeCard key={item.id} fullName = {item.fullName} image = {item.pic} title = {item.title} department = {item.department}/>
        })
    }
</section>
  )
}

export default Ejercicio7