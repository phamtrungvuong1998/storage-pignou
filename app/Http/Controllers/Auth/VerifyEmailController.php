<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Verified;
use App\Http\Requests\EmailVerificationRequest;
use Illuminate\Http\JsonResponse;
//use Illuminate\Http\RedirectResponse;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function verify(EmailVerificationRequest $request): JsonResponse
    {
        if (User::findOrFail($request->input('id'))->hasVerifiedEmail()) {
            return response()->json([
                'error' => 'Đường link không tồn tại',
            ], 400);
        }

        if (User::findOrFail($request->input('id'))->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return response()->json([
            'message' => 'Xác thực thành công',
        ]);
    }
}
