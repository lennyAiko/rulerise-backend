import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const TextareaInput = ({ id, label, value, changeData, className = '' }) => {
  const modules = {
    toolbar: [
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
        { align: [] },
      ],
    ],
  }

  const formats = [
    'header',
    'height',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'color',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'size',
  ]
  return (
    <div className="flex flex-col gap-1">
      <label className="pl-2" htmlFor="description">
        {label}:
      </label>
      {/* <textarea
        value={value}
        // @ts-ignore
        onChange={(e) => changeData(id, e.target.value)}
        id={id}
        name={id}
        className={`border font-bold ${className} rounded-lg py-2 pl-3`}
      /> */}
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        id={id}
        placeholder="write your content ...."
        onChange={(content) => changeData(id, content)}
        style={{ height: '150px' }}
        value={value}
        className="mb-20"
      ></ReactQuill>
    </div>
  )
}

export default TextareaInput
