import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RawDraftContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Button from '@mui/material/Button';
import createJob from '../../redux/actions/job';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './TextEditor.scss';

//TODO: @Arif - These should be moved to services files
import axios from 'axios';

const TextEditor = () => {
  const initialContent: RawDraftContentState = {entityMap:{},blocks:[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
  const [isgettingData, setIsGettingData] = useState(true);
  const [editorContent, setEditorContent] = useState(initialContent);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsGettingData(true);
    //TODO: @Arif - These should be moved to services files
    axios.get('/api/job/all').then((data: any) => {
      const jobDes = data.data.jobs[4].jobDescription;
      const parsedContent = JSON.parse(jobDes);
      setEditorContent(parsedContent);
      setIsGettingData(false);
    }).catch((err: any) => {
      setIsGettingData(false);
    });
  },[]);

  const getContentValue = () => {
    if(!isgettingData && editorContent){
      return editorContent;
    }
  }

  const onContentStateChange = (contentState: any) => {
    setEditorContent(contentState);
  };

  const submitJobDescription = () => {
    const jobDescription = JSON.stringify(editorContent, null, 4);
    // TODO: @Arif - this should be moved to services files
    dispatch(createJob(jobDescription));
  }


  return (
    <div className='text-editor'>
      {isgettingData? null : (
        <Editor wrapperClassName="wrapper" editorClassName="editor" toolbarClassName='toolbar' initialContentState={getContentValue()} onContentStateChange={(content) => {onContentStateChange(content)}} />
      )}
      {/* <textarea disabled value={JSON.stringify(contentState, null, 4)} /> */}
      {/* <div className='footer-cta-btn'>
        <Button className='submit' variant="contained" onClick={submitJobDescription}>Save</Button>
      </div> */}
    </div>
  )
}

export default TextEditor;