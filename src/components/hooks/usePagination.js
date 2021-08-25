import { useState } from 'react';

function usePagination(data=[], itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
  
  function currentData() {
    const begin = parseInt((currentPage - 1) * itemsPerPage);
    const end = parseInt(begin) + parseInt(itemsPerPage);
    // console.log('currentPage', currentPage);
    // console.log('itemsPerPage', itemsPerPage);
    // console.log('begin: (currentPage - 1) * itemsPerPage', begin)
    // console.log('end: begin + itemsPerPage', end)
   return data.slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
 }

export default usePagination;