import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CircleX, HousePlus } from 'lucide-react';

const AddPropertyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  // Add more state for other property fields as needed

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) {
      // Reset form on close
      setTitle('');
      setDescription('');
      setPrice('');
      setLocation('');
      setImages([]);
      // Reset other fields
    }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your logic to submit the new property data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('location', location);
    images.forEach((image) => {
      formData.append('images', image); // Append each image file
    });
    // After successful submission, you might want to close the modal and refresh the property list
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-yellow-200 hover:bg-yellow-300 cursor-pointer">
          <HousePlus className="mr-2 h-4 w-4" aria-hidden="true" />  Add New Property
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add New Property</DialogTitle>
        <DialogDescription>
          Enter the details of the property you want to add.
        </DialogDescription>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Property Title"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Property Description"
              rows={3}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price (M)</Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g., 1200"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Property Location"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="images">Images</Label>
            <Input
              type="file"
              id="images"
              multiple // Allow multiple file selection
              onChange={handleImageChange}
              accept="image/*" // Only accept image files
            />
            {images.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {images.map((image, index) => (
                  <div key={index} className="relative rounded-md overflow-hidden w-20 h-20">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={image.name}
                      className="object-cover w-full h-full"
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="destructive"
                      className="absolute top-0 right-0 -mt-1 -mr-1 shadow-sm"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <CircleX className="h-4 w-4" />
                      <span className="sr-only">Remove image</span>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Add more input fields for other property details (e.g., address, bedrooms, bathrooms, image upload) */}
          <div className="flex justify-end">
            <DialogClose className="absolute right-4 top-4 ">
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button className="bg-yellow-200 cursor-pointer" type="submit">Add Property</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPropertyModal;