import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageResize } from 'quill-image-resize-module-ts';

Quill.register('modules/ImageResize', ImageResize);

const QuillEditor = ({
  cssStyle,
  getContents,
  refProp,
}: {
  cssStyle: string;
  getContents: React.Dispatch<React.SetStateAction<string | null>>;
  refProp: React.RefObject<ReactQuill>;
}) => {
  const toolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['link', 'image'],
  ];
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'background',
    'color',
    'link',
    'image',
    'video',
    'width',
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
    ImageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize'],
    },
  };

  const styles = cssStyle;

  return (
    <ReactQuill
      className={styles}
      theme="snow"
      modules={modules}
      formats={formats}
      placeholder="내용을 입력해주세요"
      onChange={(value) => getContents(value)}
      ref={refProp}
    />
  );
};

export default QuillEditor;
