import { useEffect } from 'react';
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

function useDisableFocusContainment() {
  useEffect(() => {
    function unlockTabbing(e: KeyboardEvent) {
      if (e.key === "Tab") {
        e.stopImmediatePropagation();
      }
    }

    function unlockFocusIn(e: FocusEvent) {
      e.stopImmediatePropagation();
    }

    function unlockFocusOut(e: FocusEvent) {
      e.stopImmediatePropagation();
    }

    document.addEventListener("keydown", unlockTabbing, true);
    document.addEventListener("focusin", unlockFocusIn, true);
    document.addEventListener("focusout", unlockFocusOut, true);

    return () => {
      document.removeEventListener("keydown", unlockTabbing, true);
      document.removeEventListener("focusin", unlockFocusIn, true);
      document.removeEventListener("focusout", unlockFocusOut, true);
    };
  }, []);
}

export const WorkaroundPage = () => {
  useDisableFocusContainment()

  return (
    <>
      <h4>workaround</h4>
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
