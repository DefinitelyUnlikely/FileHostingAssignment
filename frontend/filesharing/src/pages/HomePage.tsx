import './HomePage.css'
import { FolderIcon } from '../components/FolderIcon/FolderIcon'

export function Homepage() {



    return (
        <main className="home-page">
            <div className="folder-grid">
                <FolderIcon folderPath='Folder 1/Subfolder 1' />
                <FolderIcon folderPath='Folder 2' />
                <FolderIcon folderPath='Folder 3' />
                <FolderIcon folderPath='Folder 4' />
                <FolderIcon folderPath='Folder 5' />
                <FolderIcon folderPath='Folder 6' />
            </div>

        </main>
    )
}

