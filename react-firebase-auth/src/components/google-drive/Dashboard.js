import React from "react";
import { Container } from 'react-bootstrap'
import { useFolder } from '../../hooks/useFolder'
import AddFolderBtn from "./AddFolderBtn";
import Navigation from "./Navigation";
import Folder from './Folder'
import { useParams, useLocation } from 'react-router-dom'
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import AddFileBtn from "./AddFileBtn";

export default function Dashboard() {
  const { folderId } = useParams()
  const {state = {} } = useLocation()
  const { folder, childFolders } = useFolder(folderId, state.folder)

  return (
    <>
      <Navigation />
      <Container fluid>
        <div className="d-flex align-items-center">
        <FolderBreadcrumbs currentFolder={folder} />
        <AddFileBtn currentFolder={folder} />
        <AddFolderBtn currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className='d-flex flex-wrap'>
            {childFolders.map(childFolder => (
              <div key={childFolder.id} style={{ maxWidth: '250px'}} className="p-2">
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
