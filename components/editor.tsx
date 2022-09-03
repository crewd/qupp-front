import React, { useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageResize } from 'quill-image-resize-module-ts';
import { imageUpload } from '../api';

Quill.register('modules/ImageResize', ImageResize);

const QuillEditor = ({
  cssStyle,
  getContents,
  refProp,
  url,
}: {
  cssStyle: string;
  getContents: React.Dispatch<React.SetStateAction<string>>;
  refProp: React.RefObject<ReactQuill>;
  url?: string;
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
    'width',
  ];

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files;
      const directory = url ? url : 'answer';

      if (file) {
        const data = await imageUpload(directory, file);
        const range = refProp.current?.getEditor().getSelection()?.index;

        let quill = refProp.current?.getEditor();
        if (range) {
          quill?.setSelection(range, 1);

          quill?.clipboard.dangerouslyPasteHTML(
            range,
            `<img src=${data} alt=${file} />`,
          );
        }
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: imageHandler,
        },
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize'],
      },
    }),
    [],
  );

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
