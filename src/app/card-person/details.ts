import { Input } from '@angular/core';

export class Details {
  @Input() given: string;
  @Input() surname: string;
  @Input() username: string;
  @Input() email: string;
  @Input() avatarURL: string;
  @Input() address: string;
  @Input() mobileNo: string;
  @Input() workNo: string;
  //@Input() birthday: string;
}
