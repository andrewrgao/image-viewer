import React,{useState} from 'react';
import {
  Search,
  Link,
  Button,
} from 'carbon-components-react';
import imageService from '../../services/imageService'
import ImageTable from './ImageTable';

const ImagePage = () => {
  const [search,setSearch] = useState('')
  const [searchResults,setSearchResults] = useState([])

  const handleSubmit = async () => {
    const data = await imageService.searchQuery(search);
    setSearchResults(data)
    console.log(data)
  }

  const LinkList = ({ url, homepageUrl }) => (
    <ul style={{ display: 'flex' }}>
      <li>
        <Link href={url}>GitHub</Link>
      </li>
      {homepageUrl && (
        <li>
          <span>&nbsp;|&nbsp;</span>
          <Link href={homepageUrl}>Homepage</Link>
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
      key: 'link',
      header: 'Link',
    }
  ];
  
  const rows = [
    {
      id: '1',
      name: 'Quail and Millet',
      artistName: 'Kiyohara Yukinobu',
      department: 'Asian Art',
      objectDate: 'late 17th century'
    },
  ];
  
  const getRowItems = (rows) =>
    rows.map((row) => ({
      ...row,
      key: row.objectID,
      name: row.title,
      artistName: row.artistDisplayName,
      department: row.department,
      objectDate: row.objectDate,
      links: <LinkList url={row.objectUrl} homepageUrl={row.primaryImage} />,
    }));


  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <Search
        id="search-1"
        placeHolderText="Search"
        labelText="Text input"
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button onClick={handleSubmit}>Search</Button>
      <ImageTable headers={headers} rows={getRowItems(searchResults)} />
    </div>
  );
};

export default ImagePage;

