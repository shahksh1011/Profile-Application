package com.app.profileapplication.ui.profile;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.app.profileapplication.R;
import com.app.profileapplication.models.User;
import com.app.profileapplication.utilities.Parameters;

public class ProfileFragment extends Fragment {
    private static final String TAG = "ProfileFragment";
    private String token;
    private User user;
    private TextView userIdTextView,fullNameTextView,emailIdTextView,usernameTextView,cityTextView,genderTextView;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        View root = inflater.inflate(R.layout.fragment_home, container, false);
        token = getArguments().getString(Parameters.TOKEN);
        user = (User) getArguments().getSerializable(Parameters.USER_ID);
        userIdTextView = root.findViewById(R.id.profile_userIdTextView);
        return root;
    }


}