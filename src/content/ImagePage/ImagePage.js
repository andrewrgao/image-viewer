import React,{useState} from 'react';
import {
  Search,
  Link,
  Button,
  DataTableSkeleton
} from 'carbon-components-react';
import imageService from '../../services/imageService'
import ImageTable from './ImageTable';

const ImagePage = () => {
  const [search,setSearch] = useState('')
  const [searchResults,setSearchResults] = useState([])
  const [loading,setLoading] = useState(false)

  const handleSubmit = async () => {
    if (search === '') {
      alert("Please enter a non-empty String");
    } else {
      setLoading(true)
      const data = await imageService.searchQuery(search);
      setSearchResults(data)
      setLoading(false)
      console.log(data)
      console.log(getRowItems(data))
    }
  }

  const LinkList = ({ url, homepageUrl }) => (
    <ul style={{ display: 'flex' }}>
      <li>
        <Link href={url}>Museum Page</Link>
      </li>
      {homepageUrl && (
        <li>
          <span>&nbsp;|&nbsp;</span>
          <Link href={homepageUrl}>Image</Link>
        </li>
      )}
    </ul>
  );

  const headers = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'artistName',
      header: 'Artist',
    },
    {
      key: 'department',
      header: 'Department',
    },
    {
      key: 'objectDate',
      header: 'Date',
    },
    {
      key: 'links',
      header: 'Link',
    }
  ];
  
  /*
  const rows = [
    {
      id: '1',
      name: 'Quail and Millet',
      artistName: 'Kiyohara Yukinobu',
      department: 'Asian Art',
      objectDate: 'late 17th century'
    },
  ]; */
  
  const getRowItems = (rows) =>
    rows.map((row,index) => ({
      ...row,
      id: String(row.objectID),
      key: index,
      name: row.title,
      artistName: row.artistDisplayName,
      department: row.department,
      objectDate: row.objectDate,
      links: <LinkList url={row.objectURL} homepageUrl={row.primaryImage} />,
    }));

  return (
    <div>
      <div className="flex">
        <div className="row-header">
          <Search
            id="search-1"
            placeHolderText="Search"
            labelText="Text input"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div>
          <Button onClick={handleSubmit}>Search</Button>
        </div>
      </div>
      {!loading && <ImageTable headers={headers} rows={getRowItems(searchResults)} />}
      {loading && <DataTableSkeleton
      columnCount={headers.length + 1}
      rowCount={10}
      headers={headers}
    />}
    </div>
  );
};

export default ImagePage;

