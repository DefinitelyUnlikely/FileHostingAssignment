import './HomePage.css'
import { FolderIcon } from '../components/FolderIcon/FolderIcon'

export function Homepage() {



    return (
        <main className="home-page">
            <div className="folder-grid">
                <FolderIcon folderName='Folder 1' />
                <FolderIcon folderName='Folder 2' />
                <FolderIcon folderName='Folder 3' />
                <FolderIcon folderName='Folder 4' />
                <FolderIcon folderName='Folder 5' />
                <FolderIcon folderName='Folder 6' />
            </div>

        </main>
    )
}

