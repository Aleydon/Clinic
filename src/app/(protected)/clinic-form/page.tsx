import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

import { ClinicForm } from './_components/form';
export default function ClinicFormPage() {
  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add clinic</DialogTitle>
        </DialogHeader>
        <ClinicForm />
      </DialogContent>
    </Dialog>
  );
}
