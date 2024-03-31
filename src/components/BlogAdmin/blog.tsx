"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Button, Modal, Form } from 'react-bootstrap';

const TodoList = ({ id, title, paragraph, image, path, author, tags, publishDate, onUpdate, onDelete }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedParagraph, setEditedParagraph] = useState(paragraph);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleSaveEdit = () => {
    onUpdate(id, editedTitle, editedParagraph);
    setShowEditModal(false);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="card border rounded-3 my-3" style={{ width: "18rem" }}>
      <Link legacyBehavior href={path}>
        <a>
          <Card.Img variant="top" src={image} alt={title} />
        </a>
      </Link>
      <div className="card-body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{paragraph}</Card.Text>
        <div className="d-flex align-items-center">
          <Image
            src={author.image}
            alt={author.name}
            width={30}
            height={30}
            className="rounded-circle me-2"
          />
          <div>
            <small>{author.name}</small>
            <br />
            <small className="text-muted">{author.designation}</small>
          </div>
        </div>
        <div className="mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-primary me-1">
              {tag}
            </span>
          ))}
        </div>
        <small className="text-muted">{publishDate}</small>
        <div className="mt-2">
          <Button variant="primary" onClick={handleEdit} className="me-2">
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Remove
          </Button>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formParagraph">
              <Form.Label>Paragraph</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter paragraph"
                value={editedParagraph}
                onChange={(e) => setEditedParagraph(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoList;
