import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  TextField,
} from 'react-aria-components';
import { Modal } from './Modal';

export const CustomModalPage = () => {
  return (
    <>
      <h4>custom modal</h4>
      <DialogTrigger>
        <Button>Sign up…</Button>
        <TextField>
          <Label>First Name</Label>
          <Input />
        </TextField>
        <Modal>
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
      </DialogTrigger>
    </>
  )
}
