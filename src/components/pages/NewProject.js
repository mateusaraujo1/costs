import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Create project</h1>
            <p>Crete your project and then add the services</p>
            <ProjectForm></ProjectForm>
        </div>
    )
}

export default NewProject