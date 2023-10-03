import './EmployeeCard.css'

const EmployeeCard = (props) => {

    const {image, fullName, title, department} = props
    return (
        <article className="container d-flex gap-4 employee-card">
            <div>
                <img className="p-2 employee-img" src={image} alt={fullName} />
            </div>

            <div>
                <h3>{fullName}</h3>

                <div className="d-flex gap-3 justify-content-between p-3">
                    <h4>{title}</h4>
                    <h4 className='btn btn-info'>{department}</h4>
                </div>
            </div>
        </article>
    )
}

export default EmployeeCard