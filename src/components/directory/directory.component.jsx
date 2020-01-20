import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DirectoryReducer from '../../redux/directory/directory.reducer';
import  {SelectDirectorySection}  from '../../redux/directory/directory.selector'
import MenuItem from '../../components/menu-items/menu-items';
import './directory.style.scss';

const Directory = ({sections}) =>  {
    console.log(sections)
      return (
        <div className="directory-menu">
        {sections.map(({ id, ...otherSectionItems }) => (
          <MenuItem key={id} {...otherSectionItems}  />
      ))}
        </div>
      )
    
}

const mapStateToProps = createStructuredSelector({
  sections: SelectDirectorySection,
})

export default connect(mapStateToProps)(Directory);