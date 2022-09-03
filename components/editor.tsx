import React, { createElement, useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageResize } from 'quill-image-resize-module-ts';
import { AxiosError } from 'axios';
import { imageUpload } from '../api';

Quill.register('modules/ImageResize', ImageResize);

const QuillEditor = ({
  cssStyle,
  getContents,
  refProp,
}: {
  cssStyle: string;
  getContents: React.Dispatch<React.SetStateAction<string>>;
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
    'width',
  ];

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files;

      if (file) {
        try {
          const data = await imageUpload('question', file);
          const range = refProp.current?.getEditor().getSelection()?.index;

          let quill = refProp.current?.getEditor();
          if (range !== null && range !== undefined) {
            quill?.setSelection(range, 1);

            quill?.clipboard.dangerouslyPasteHTML(
              range,
              `<img src=${data} alt=${file} />`,
            );
          }
        } catch (error) {
          const err = error as AxiosError;
          return { ...err.response, success: false };
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
