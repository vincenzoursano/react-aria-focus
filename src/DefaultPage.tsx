import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  TextField,
  Modal
} from 'react-aria-components';

export const DefaultPage = () => {
  return (
    <>
      <h4>default</h4>
      <DialogTrigger>
        <Button>Sign up…</Button>
        <TextField>
          <Label>First Name</Label>
          <Input />
        </TextField>
        <Modal style={{ border: "1px solid #654321" }}>
          <Dialog>
            <form>
              <Heading slot="title">Sign up</Heading>
              <TextField autoFocus>
                <Label>First Name</Label>
                <Input />
              </TextField>
              <TextField>
                <Label>Last Name</Label>
                <Input />
              </TextField>
              <Button slot="close" style={{ marginTop: 8 }}>
                Close
              </Button>
            </form>
          </Dialog>
        </Modal>
      </DialogTrigger >
    </>
  )
}
