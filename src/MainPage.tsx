import { Input, Label, TextField } from 'react-aria-components'

export const MainPage = () => {
  return (
    <>
      <iframe
        id='default'
        src="/default"
        style={{ width: 400, height: 600 }}
        title="Default"
      />
      <iframe
        id='custom-modal'
        src="/custom-modal"
        style={{ width: 400, height: 600 }}
        title="Custom Modal"
      />
      <iframe
        id='workaround'
        src="/workaround"
        style={{ width: 400, height: 600 }}
        title="Workaround"
      />
      <div>
        <TextField autoFocus>
          <Label>Input</Label>
          <Input />
        </TextField>
      </div>
    </>
  )
}