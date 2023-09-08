import { ResolveFn } from '@angular/router';
import { Member } from '../models/member';
import { Injectable, inject } from '@angular/core';
import { MembersService } from '../_services/members.service';


export const MemberDetailedResolver: ResolveFn<Member> = (route, state) => {
    const memberService = inject(MembersService);
    return memberService.getMember(route.paramMap.get('username'));
};
