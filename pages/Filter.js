import React, { useState, useRef, useEffect } from "react";
import styles from '../styles/HomePage.module.css'
import FilterModalComponent from "./FilterModal";
 //https://www.fullstacklabs.co/blog/building-a-responsive-filter-component-on-react//
export default function FilterComponent() {
 const [isOpen, setIsOpen] = useState(false);
 const dropdownRef = useRef(undefined);
 const buttonRef = useRef(undefined);
 const modalRef = useRef(undefined);
 
useEffect(() => {
 const handleClick = event => {
 
const isDropdownClicked = dropdownRef.current && dropdownRef.current.contains(event.target);
 const isButtonClicked = buttonRef.current && buttonRef.current.contains(event.target);
 const isModalClicked = modalRef.current && modalRef.current.contains(event.target);
 
 if (isDropdownClicked || isButtonClicked || isModalClicked) {
  // We would do nothing if the ref is undefined or user clicks on menu.
   return;
 }
 
 // Or else close the menu.  
 setIsOpen(false);
 };
 
 document.addEventListener("mousedown", handleClick);
 document.addEventListener("touchstart", handleClick); 
 
 // cleanup
 return () => {
   document.removeEventListener("mousedown", handleClick);
   document.removeEventListener("touchstart", handleClick);
 };
}, [dropdownRef, buttonRef, modalRef]);

const handleSelect = () => {
 alert("Yay! Filters applied!");
 setIsOpen(false);
};
 
return (
 < div className={styles.filterWrapper} > 
   <button 
     ref={buttonRef}
     onClick={() => setIsOpen(!isOpen)}
     className={styles.filterButton}
   >
     JS Frameworks
  </button >
   {isOpen && (
   < div ref={dropdownRef} className={styles.filterDropdown} >
        < div >
       Dropdown content goes here
       < div className={styles.filterDropdownActions} >
        <button onClick={() => handleSelect()}      className={styles.filterDropdownButton} >
         Select
        </button >
      </div >
    </div >
  </div >
)}
      
 {isOpen && (
   < FilterModalComponent
     ref={modalRef}
     onSelect={() => handleSelect()}
     onCancel={() => setIsOpen(false)}
   >
    Modal content goes here.
  </FilterModalComponent >
  )}
  </div >
 );
}